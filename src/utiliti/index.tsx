import { useRef, useState } from "react";

//định dạng sđt
const formatPhoneNumber = (phoneNumberString: any) => {
    var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return "*** *** " + match[3];
        // return match[1] + " " + match[2] + " " + match[3];
    }
    return null;
}
//định dạng sđt ko che
const formatShowPhoneNumber = (phoneNumberString: any) => {
    var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return match[1] + " " + match[2] + " " + match[3];
        // return match[1] + " " + match[2] + " " + match[3];
    }
    return null;
}

//ĐỊNH DẠNG GIÁ
const formatPrice = (val: number | string | undefined) => {
    if (val != undefined) {
        let x = val.toString();
        // return v.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        var parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return parts.join(",");
    } else {
        return "";
    }
};
//ĐỊNH DẠNG GIÁ dấu ,
const formatPricestring = (val: number | string | undefined) => {
    if (val != undefined) {
        let x = val.toString();
        // return v.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        var parts = x.toString().split(",");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    } else {
        return "";
    }
};

export { formatPhoneNumber, formatPrice, formatShowPhoneNumber, formatPricestring }