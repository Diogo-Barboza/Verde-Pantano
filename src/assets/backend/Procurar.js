
const admin = require('firebase-admin');
var serviceAccount = require("./pcwizard-bdb56-firebase-adminsdk-d5xm0-4e41fcbb39.json");

admin.initializeApp({
credential: admin.credential.cert(serviceAccount),
databaseURL: 'https://pcwizard-bdb56-default-rtdb.firebaseio.com'
});

const db = admin.database();


// Função para buscar as configurações pelos campos OS_min, OS_rec, cpu_min, cpu_rec, gpu_min, gpu_rec, ram_min, ram_rec
async function getConfigurationsByGameName(gameName) {
  try {
    const gamesRef = db.ref();
    const querySnapshot = await gamesRef.orderByChild('name').equalTo(gameName).once('value');
    const configurations = [];

    if (!querySnapshot.exists()) {
      console.log("Jogo não encontrado.");
      return configurations;
    }

    querySnapshot.forEach((gameSnapshot) => {
      const game = gameSnapshot.val();
      const configuration = {
        gameName: gameName,
        OS_min: game.OS_min,
        OS_rec: game.OS_rec,
        cpu_min: game.cpu_min,
        cpu_rec: game.cpu_rec,
        gpu_min: game.gpu_min,
        gpu_rec: game.gpu_rec,
        ram_min: game.ram_min,
        ram_rec: game.ram_rec
      };
      configurations.push(configuration);
    });

    return configurations;
  } catch (error) {
    console.error("Erro ao buscar configurações:", error);
    throw error;
  }
}

// Exemplo: buscar pelo nome "Super Psy Penguin"
//const gameName = 'Super Psy Penguin';
//getConfigurationsByGameName(gameName)
//  .then(configurations => {
//    console.log("Configurações encontradas:");
//    console.log(configurations);
//  })
//  .catch(error => {
//    console.error("Erro ao buscar configurações:", error);
// });
