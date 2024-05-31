# GridScript
Concept language for Excel/Google Sheets written in JavaScript.

# Commands
All items in commands surrounded by square brackets (`[]`) can be replaced with the variable syntax (`$variableName`). 

## set
Sets the content of a cell.
### Syntax
Sets the content of cell (0,0) to "text lol" `set [0] [0] [text lol]`  

## clr
Clears the content of a cell.
### Syntax
Clears the content of the cell (0,0) `clr [0] [0]`

## var
Creates a new variable.
### Syntax
Creates a variable with the name "row" and sets it to 0 `var row [0]`

## add
Adds a number to a variable.
### Syntax
Adds 2 to the variable "num" `add num [2]`

## add
Adds a number to a variable.
### Syntax
Adds 2 to the variable "num" `add num [2]`

## prn
Prints text.
### Syntax
Prints "the number is" then the value of the variable "num" `prn [the number is] [$num]`
