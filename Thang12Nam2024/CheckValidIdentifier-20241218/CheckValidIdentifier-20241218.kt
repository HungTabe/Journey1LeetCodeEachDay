/**Implement the function that checks whether a string is a
valid identifier. A valid identifier is a non-empty string that
starts with a letter or underscore and consists of only letters,
digits and underscores.**/

fun isValidIdentifier: String): Boolean {
// check empty string or not by build-in function
if (s.isEmpty()) {
return false
}
// check #1 Letter if != letter or then return false
if (!s[0].isLetter() && s[0] != '{
return false
}
// check string include letter digit or not if not return fasle
for (char in s) {
if (!char.isLetterOrDigit() && char != '_') {
return false
}
return true
}
return true
}
fun main(args: Array<String>) {
println(isValidIdentifier"name"))
// true
println(isValidIdentifier("_name"))
// true
println(isValidIdentifier("_12"))
// true
println(isValidIdentifier""))
// false
println(isValidIdentifier"012"))
// false
println(isValidIdentifier("nos"))
// false
}