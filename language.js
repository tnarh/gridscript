let codeDiv = document.getElementById("code");
let output = document.getElementById("output");
let variables = {};

function checkVar(text) {
    if (text.replace("$", "") in variables) {
        return variables[text.replace("$", "")];
    } else {
        return text;
    }
}

function system(message) {
    output.innerHTML += `<span class="system">(${message})</span><br>`;
}

function join(text, separator = " ") {
    return text.map(String).join(' ')
}

function runLine(line) {
    let data = line.split(" ");
    if (data[0] == "set") {
        let text = data.slice(3);
        if (text[0].startsWith("$")) {
            document.getElementById(`cell-${
                checkVar(data[1])
            }-${
                checkVar(data[2])
            }`).value = checkVar(text[0]);
        } else {
            document.getElementById(`cell-${
                checkVar(data[1])
            }-${
                checkVar(data[2])
            }`).value = join(text);
        }
        system(`value of cell ${
            checkVar(data[1])
        },${
            checkVar(data[2])
        } set to ${checkVar(data[3])}`);
    } else if (data[0] == "clr") {
        document.getElementById(`cell-${
            checkVar(data[1])
        }-${
            checkVar(data[2])
        }`).value = '';
        system(`value of cell ${
            checkVar(data[1])
        },${
            checkVar(data[2])
        } cleared`);
    } else if (data[0] == "var") {
        if (data[2].startsWith("$")) {
            variables[data[1].replace("$", "")] = checkVar(data[2]);
            system(`variable "${data[1]}" set to ${checkVar(data[2])}`);
        } else {
            let text = data.slice(2);
            variables[data[1].replace("$", "")] = join(text);
            system(`variable "${data[1]}" set to ${join(text)}`);
        }
    }
}

function run() {
    let code = codeDiv.value;
    output.innerHTML = "";
    variables = {};
    code = code.split("\n")

    for (let i = 0; i < code.length; i++) {
        runLine(code[i]);
    }
}

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'Enter') {
        run();
        event.preventDefault();
    }
});