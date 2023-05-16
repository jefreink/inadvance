// export function createInquiry(context, data) {
//     return new Promise((resolve, reject) => {
//         var db = this.$firebase.firestore();
//         db.collection('inquiries')
//             .add(data)
//             .then(() => {
//                 resolve();
//             })
//             .catch(error => {
//                 console.error('Error writing document: ', error);
//                 reject('Error al crear tu consulta.');
//             });
//     });
// }
