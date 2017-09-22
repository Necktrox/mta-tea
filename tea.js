
const DELTA = 0x9E3779B9;

function teaEncode(text, key) {
    text = Buffer.from(text);
    key = Buffer.from(key);

    // Copy contents from key to key32
    var key32 = new Uint32Array(4);
    var key32View = new DataView(key32.buffer);

    for (var offset = 0; offset < key.length && offset < 16; ++offset)
        key32View.setUint8(offset, key[offset]);

    // Copy the input text to a buffer of size multiple of 4
    var textLength = text.length;
    var bufferLength = textLength;

    if (!textLength)
        return "";
    
    if (textLength % 4)
        bufferLength += 4 - (textLength % 4);

    bufferLength = bufferLength / 4;
    var text32 = new Uint32Array(bufferLength + 1);
    var text32View = new DataView(text32.buffer);

    for (offset = 0; offset < textLength; ++offset)
        text32View.setUint8(offset, text[offset]);

    // Encode
    var previous = 0;

    for (offset = 0; offset < bufferLength; ++offset) {
        var v = text32[offset];
        var sum = 0;
    
        for (var i = 0; i < 32; ++i) {
            v += (((previous << 4) ^ (previous >>> 5)) + previous) ^ (sum + key32[sum & 3]);
            sum += DELTA;
            previous += (((v << 4) ^ (v >>> 5)) + v) ^ (sum + key32[(sum>>>11) & 3]);
        }

        text32[offset] = v;
    }

    text32[bufferLength] = previous;

    return Buffer.from(text32.buffer).toString("base64");
}

function teaDecode(data, key) {
    data = Buffer.from(data, "base64");
    key = Buffer.from(key);

    // Copy contents from key to key32
    var key32 = new Uint32Array(4);
    var key32View = new DataView(key32.buffer);

    for (var offset = 0; offset < key.length && offset < 16; ++offset)
        key32View.setUint8(offset, key[offset]);

    // Copy the input data to data32
    var dataLength = data.length;
    var dataBlocks = dataLength / 4;
    var numPasses = dataBlocks - 1;
    
    if (numPasses <= 0)
        return "";

    var data32 = new Uint32Array(dataBlocks);
    var data32View = new DataView(data32.buffer);
    
    for (offset = 0; offset < dataLength; ++offset)
        data32View.setUint8(offset, data[offset]);
    
    // Decode
    var previous = data32[numPasses];
    
    for (offset = numPasses - 1; offset >= 0; --offset) {
        var v = data32[offset];
        var sum = 0xC6EF3720;
    
        for (var i = 0; i < 32; ++i) {
            previous -= (((v << 4) ^ (v >>> 5)) + v) ^ (sum + key32[(sum>>>11) & 3]);
            sum -= DELTA;
            v -= (((previous << 4) ^ (previous >>> 5)) + previous) ^ (sum + key32[sum & 3]);
        }

        data32[offset] = v;
    }

    // Remove trailing zero bytes
    var byteLength = data32.byteLength - 5
    for (; data32View.getUint8(data32.byteOffset + byteLength) === 0 && byteLength >= 0; byteLength--);

    return Buffer.from(data32.buffer, data32.byteOffset, byteLength + 1).toString("utf8");
}

module.exports.encode = teaEncode;
module.exports.decode = teaDecode;
