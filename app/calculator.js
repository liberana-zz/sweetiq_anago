exports.calc = function (val1, val2, operator) {

    var regex = new RegExp("[0-9]");
    var regex_operator = new RegExp("[\-\*\+\/]$");

    if (!regex.test(val1))
        return "invalid val1";
    if (!regex.test(val2))
        return "invalid val2";
    if (!regex_operator.test(operator))
        return "invalid operator"

    var result = eval(val1 + operator + val2);
    return result;
};