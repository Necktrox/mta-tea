
var tests = [
    {
        text: "hello world",
        key: "obfuscated",
        expected: "nxn7RojhaY4ZncPnqYJsPA=="
    },
    {
        text: "this is a nice plant pot",
        key: "obfuscated",
        expected: "7vgFBFGRjhQ3JprrfyQ/d5VoI7QH4Qaf0Rfo3w=="
    },
    {
        text: "abc def",
        key: "obfuscated",
        expected: "AB9FOVMJockDQLX4"
    },
    {
        text: "Chupa chups candy canes marshmallow donut donut jelly-o pudding halvah dessert. Oat cake marshmallow lollipop. Toffee chocolate jujubes cheesecake caramels toffee ice cream jujubes.",
        key: "obfuscated",
        expected: "yZaeElo0wscVDe6lGWZt+VJ/G+wkKKSTHSlR8VFhoa7NFEm8LzlNtp+q0+UjckIRBdyzLy3eoYU4AhoSGaebhCF/NycwfsRFhcy1/FRl2fM9wpJfTysb9SyIc2Mcj7YqahZUBXWFEVYxG4yhiQ4lNj+fRMVKNwuNiEJn79UlPSnHioqOTOqm3TBzXhC5xM1uk+gcVRyHv0XagwQ4IaXaxnuArcLZavYHV2O1XBrjnpmQM1oUei/9RaSM0AM="
    },
    {
        text: "最健不問動栃人点掲条写覇学球太一惑千収意。連降日限極目音雅左正著者績来幕原越氏",
        key: "obfuscated",
        expected: "I+3ThHyHXrNiYSQGTVsXzQD0AT3v6p6eJGPvjljTVp2pTIMTikf1+szVbiifD5lBRyHdZouNH5nylS8ikKu4XMv4FtxNOJEWliMNeQtEDWBB1eM9kXUL3g8fQPUx1upci5bUqKbshiDOwjnjd0BwInBGGTVL3grnw7Jd2w=="
    },
    {
        text: "Οι περισσότεροι δεν ζητούν από τον σωστό άνθρωπο να δει το σημείο να γράφει υψηλό βαθμό σύγχυσης",
        key: "obfuscated",
        expected: "DkSfaTHtmFg7pWhyKdg9UiiF23iZ+WxiR6W7WQTO1+FHdOEgHbEICIrG+QGncE4b9njppSwvQpRYKkVTPRYezCCWwoVRrE1sRfc3ZoK9fgsmRgNKXiksZkWueKpWf5Bi9UxSiObsEZZ32SxVMlr05S2ySISWsG8ciO9Hc7+FT8napvZUG8vWQCLQ5GIxtLAleaoVOGcCW7ZcsQXdtXWgJfyplAJ76JslBZ5G0KjNSf6YMica"
    },
    {
        text: "Большинство не спрашивают у правого человека, чтобы понять, как писать высокую степень замешательства",
        key: "obfuscated",
        expected: "zIumsRhj1YPHuq2d0R1kEz2AAph1TVGN3e6CdTTeopBZCPr0rp8g6AxaJQokJ+5nZURQ5tpYK0HdatqnDqyKLJiYQIhu7Guj0DUI3b0vMh7DOXyr5bjxwrs0ttmMJdqxXxlm0VJZ6f1zyKUm0ljOYEx0eqf23N2YKvYX4Z4LCb6cbGyqq8UKo7uHNo5yCGhSlHjKszAP9OzS6bk/Y2CDqwXDrSK8MBHtcYD8CRFq/vxdrbU47c2Ocf4TdpY3FPCJ"
    },
    {
        text: "hello world",
        key: "a_very_long_obfuscated_password_for_testing",
        expected: "9NGLtdIrvC7QbBjbzpxjtg=="
    },
    {
        text: "this is a nice plant pot",
        key: "a_very_long_obfuscated_password_for_testing",
        expected: "zDdTfHednHL8LFCZVrshYE/mC1+UbPqsJbRLSA=="
    },
    {
        text: "abc def",
        key: "a_very_long_obfuscated_password_for_testing",
        expected: "Ufbl7myGuNfrrQOZ"
    },
    {
        text: "Chupa chups candy canes marshmallow donut donut jelly-o pudding halvah dessert. Oat cake marshmallow lollipop. Toffee chocolate jujubes cheesecake caramels toffee ice cream jujubes.",
        key: "a_very_long_obfuscated_password_for_testing",
        expected: "CbMbUTv7ZVFplVf9BTZe93uC+ReN3fc0N/XQ1NZ8j2IR1iUAAkZLQogtAU1XvOzUV9vClpnDnXwE15GlWJjGac+Keo3fazJOmh2t9TIdI6+qVVkNR5pczNOavvpeCbK7Sz6JyKNsbOMJkMqcz7kTQRlhwuia2ZlA0bji62d5fZrhDNerP/03o/EobV1kOSkW+tAOkCJ41RbA08a0nFGSleBlI0M7NdVjz72QlD1NCGb2atLljOCDQ0+WggA="
    },
    {
        text: "最健不問動栃人点掲条写覇学球太一惑千収意。連降日限極目音雅左正著者績来幕原越氏",
        key: "a_very_long_obfuscated_password_for_testing",
        expected: "i0hoJUJBQvgaIYrRBvyDek8mLeo5P6jDzY6fjOFkKbFZtEq1vQMs+g5OOWQZ091IDgfgHpmRNpu4Z83JZ8x7XuQvSIQgF4INNz9xcHWxdN1b4KERQR+tma3ccS1ZCHy2e6f7fGzqAo3h5Lf2QTQubMfp8O4I51Kyh8mhiQ=="
    },
    {
        text: "Οι περισσότεροι δεν ζητούν από τον σωστό άνθρωπο να δει το σημείο να γράφει υψηλό βαθμό σύγχυσης",
        key: "a_very_long_obfuscated_password_for_testing",
        expected: "7J3pzVEFAbAPRWrRJoAjxyHciQfEdNO+xXe+5ANFa+tABDYNfe5pzq63vTHuCGUJt2TxgphlQ/DiEZ5lKSoMOspGI4LawJe6UFhUDXZ7scpYRxnJ8fRZUyv9zseSCUPGlseDdH4Xpv3Fhm0YDhKpDOI/Sr3rTvnbh7I6Ytdlbjav85Chw82esSU+poNUVHHBjh1SYzQrEcQ8/VQI97Zu6pv+KAU87gRLEqNyRwHJKtQKZlfH"
    },
    {
        text: "Большинство не спрашивают у правого человека, чтобы понять, как писать высокую степень замешательства",
        key: "obfuscated",
        expected: "zIumsRhj1YPHuq2d0R1kEz2AAph1TVGN3e6CdTTeopBZCPr0rp8g6AxaJQokJ+5nZURQ5tpYK0HdatqnDqyKLJiYQIhu7Guj0DUI3b0vMh7DOXyr5bjxwrs0ttmMJdqxXxlm0VJZ6f1zyKUm0ljOYEx0eqf23N2YKvYX4Z4LCb6cbGyqq8UKo7uHNo5yCGhSlHjKszAP9OzS6bk/Y2CDqwXDrSK8MBHtcYD8CRFq/vxdrbU47c2Ocf4TdpY3FPCJ"
    },
];

const tea = require("./tea");

var failed = false;

for (var testcase of tests) {
    var encoded = tea.encode(testcase.text, testcase.key);

    if (encoded !== testcase.expected) {
        console.log(`Encoding failed:\n\tGot:      ${encoded}\n\tExpected: ${testcase.expected}\n\tText:     ${testcase.text}\n`);
        failed = true;
    } else {
        var decoded = tea.decode(encoded, testcase.key);

        if (decoded !== testcase.text) {
            console.log(`Decoding failed:\n\tGot:      ${decoded}\n\tExpected: ${testcase.text}\n`);
            failed = true;
        }
    }
}

if (!failed)
    console.log("All tests successful");

process.exit(failed ? 1 : 0);
