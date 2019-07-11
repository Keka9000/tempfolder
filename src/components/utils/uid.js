function s4 () {

    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1)

}

export default function (prefix) {

    return (prefix ? prefix + '-' : '') + s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4()

}

// __salt: function () {
//
//     return Math.floor((1 + Math.random()) * 0x10000)
//         .toString(16)
//         .substring(1)
//
// },
//
// uniqId: function (prefix) {
//
//     if (this.uid) {
//
//         return (prefix ? prefix + '-' : '') + this.uid
//
//     } else {
//
//         return this.__salt() + this.__salt() + '-' + this.__salt() + '-' +
//             this.__salt() + '-' +  this.__salt() + '-' +
//             this.__salt() + this.__salt() + this.__salt()
//
//     }
//
// }
