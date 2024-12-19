import kotlin.random.Random
import kotlin.system.exitProcess

fun main() {
    println("Welcome to MindMaster!")
    println("Try to guess the secret code. The code consists of 4 digits (0-9).")
    println("Hints will be provided after each guess:")
    println("- Bulls: Correct digit in the correct position.")
    println("- Cows: Correct digit but in the wrong position.")

    val secretCode = generateSecretCode()
    var attempts = 0

    while (true) {
        print("Enter your 4-digit guess: ")
        val guess = readLine()?.trim()

        if (guess == null || guess.length != 4 || !guess.all { it.isDigit() }) {
            println("Invalid input. Please enter exactly 4 digits.")
            continue
        }

        attempts++
        val result = evaluateGuess(secretCode, guess)

        println("Bulls: ${result.first}, Cows: ${result.second}")

        if (result.first == 4) {
            println("Congratulations! You've guessed the secret code in $attempts attempts.")
            exitProcess(0)
        }
    }
}

fun generateSecretCode(): String {
    /*.shuffled(): Trộn ngẫu nhiên thứ tự của các phần tử trong danh sách.
    Kết quả là một danh sách mới với các chữ số được sắp xếp ngẫu nhiên.
    Ví dụ: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] có thể trở thành [7, 3, 0, 9, 2, 5, 8, 1, 4, 6].*/

    /* .take(4): Lấy 4 phần tử đầu tiên từ danh sách đã được trộn ngẫu nhiên.
    Ví dụ: Nếu danh sách sau khi trộn là [7, 3, 0, 9, 2, 5, 8, 1, 4, 6], thì .take(4) trả về [7, 3, 0, 9].
    * */
    val digits = (0..9).shuffled().take(4)
    return digits.joinToString("")
}

fun generateSecretNumber(length: Int = 4) : String {
    // .shiffled() : Random swap the order of value index in array
    // .take(number e take) : Just take number of e need to take
    val digits = (0..9).shuffled().take(length)
    return digits.joinToString("")
}

fun evaluateGuess(secretCode: String, guess: String): Pair<Int, Int> {

    var bulls = 0
    var cows = 0

    // val map = mutableMapOf<Int, String>() // Tạo một MutableMap rỗng có thể chỉnh sữả
    // Thêm các cặp key-value
    // map[1] = "One"
    // map[2] = "Two"
    // map[3] = "Three"
    // println(map) // Output: {1=One, 2=Two, 3=Three}

    // dùng để theo dõi số lần xuất hiện của các ký tự trong chuỗi secretCode.
    val secretCodeMap = mutableMapOf<Char, Int>()
    // dùng để theo dõi số lần xuất hiện của các ký tự trong chuỗi guess.
    val guessMap = mutableMapOf<Char, Int>()

    /* (String).indices: indices(chỉ số) Lấy tất cả chỉ số (index) của chuỗi secretCode. Vd: nếu secretCode = "1234",
    *  then secretCode.indices là [0, 1, 2, 3].
    *  i in Array : Biến chỉ mục được sử dụng để truy cập từng ký tự trong secretCode và guess khi for loop
    * */
    for (i in secretCode.indices) {
        // If in the same order that have the same value then bull will + 1
        if (secretCode[i] == guess[i]) {
            bulls++
        } else { // 2 vs 3
            /*
            * secretCodeMap[secretCode[i]] được sử dụng để truy cập hoặc gán giá trị cho một khóa (key) trong bản đồ (map).
            * Nếu khóa đó chưa tồn tại trong bản đồ, một mục mới sẽ được thêm vào bản đồ với khóa đó.
            * */

            /*
            * secretCodeMap.getOrDefault(secretCode[i], 0)
             getOrDefault(key, defaultValue): Lấy giá trị tương ứng với key (trong trường hợp này là secretCode[i]) từ secretCodeMap.
             Nếu key không tồn tại trong secretCodeMap, trả về giá trị mặc định (0 trong trường hợp này).

             Ý nghĩa trong ngữ cảnh:
             Kiểm tra số lần xuất hiện hiện tại của ký tự secretCode[i] trong secretCodeMap.
             Nếu ký tự chưa tồn tại, mặc định nó xuất hiện 0 lần.
              + 1 :Tăng số lần xuất hiện của ký tự secretCode[i] lên 1.*/

            /*
            * val myMap = mapOf("apple" to 1, "banana" to 2, "orange" to 3)
            Truy xuất giá trị với khóa "apple"
            val appleValue = myMap.getOrDefault("apple", 0)
            println("Apple value: $appleValue")  // Output: Apple value: 1 */

            // check số lần xuất hiện số đó trong map
            secretCodeMap[secretCode[i]] = secretCodeMap.getOrDefault(secretCode[i], 0) + 1 // 2
            guessMap[guess[i]] = guessMap.getOrDefault(guess[i], 0) + 1
        }
    }

    for ((key, value) in guessMap) {
        if (secretCodeMap.containsKey(key)) {
            cows += minOf(value, secretCodeMap[key]!!)
        }
    }

    return Pair(bulls, cows)
}
