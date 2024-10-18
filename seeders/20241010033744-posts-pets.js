'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('posts', [
      {
        id: '1',
        title: 'Banho no catiorrinho',
        metadescription: 'Use as utensilios certos para banhar seu cão',
        body: 'Banhos regulares mantém os pelos e pele de seu cachorro limpa, renovada e saudável. O processo de ensaboar e escovar remove resíduos de pelos e peles que já estão mortas, providenciando um maior respiro da pele de seu cachorro',
        categoriaId: '6', // Assumindo que 'bem-estar' corresponde à categoria 'saúde'
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '2',
        title: 'Seu catiorrinho merece um tapete refrescante',
        metadescription: 'O frescor que seu pet merece',
        body: 'O produto é um colchonete de nylon, recheado com espuma e gel (não tóxico), que promete refrescar os bichos. O gel interno é ativado com o peso e a pressão do animal, ou seja, começa a funcionar quando o pet está sobre ele. O tapete promete baixar a temperatura entre 6ºC e 10°C em relação à registrada no ambiente.',
        categoriaId: '6', // Assumindo que 'bem-estar' corresponde à categoria 'saúde'
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '3',
        title: 'Cuidado com as pulgas!',
        metadescription: 'Evite que seus animais sejam afetados por esses parasitas',
        body: 'Para prevenir que o seu pet seja infestado, coleiras e sprays anti-pulgas e carrapatos são boas opções. Procure uma clínica veterinária para saber qual é a melhor escolha para o seu animal, de acordo com o porte, tipo de pelo e idade. Os sprays precisam ser reforçados a cada 30 dias para que o efeito seja mantido.',
        categoriaId: '6', // Assumindo que 'bem-estar' corresponde à categoria 'saúde'
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '4',
        title: 'Uma onda de pets estressados',
        metadescription: 'Você está triste, doente ou nervoso, e o pet acaba imitando o seu comportamento',
        body: 'Atenção e carinho. A primeira coisa que você deve saber, caso ainda não tenha adotado um pet, é que ele demanda tempo, atenção e carinho. Essas são as coisas mais importantes que você precisa ter em mente! Não se esqueça das brincadeiras! A interação com o dono também é fundamental para o bem-estar do pet. Por isso, além de oferecer brinquedos, procure brincar com o cão lançando bolinhas, brincando de esconde-esconde, etc., Evite deixar o bichinho sozinho por muito tempo.',
        categoriaId: '5', // Assumindo que 'comportamento' corresponde à categoria 'treinamento'
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '5',
        title: 'Como deixar seu pet mais corajoso?',
        metadescription: 'A interação é o fator decisivo nesse aprendizado',
        body: 'Uma dica essencial de como acalmar um cachorro medroso é associar a situação de medo com um agrado: um petisco, um carinho ou uma brincadeira. Dessa forma, pouco a pouco, a memória do pet vai se acostumar com aquela situação e ele vai se sentir mais confortável e confiante. Fique por perto mas não force a interação.',
        categoriaId: '5', // Assumindo que 'comportamento' corresponde à categoria 'treinamento'
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '6',
        title: 'Por que os gatos ronronam?',
        metadescription: 'Ronronar é um ruído de aviso',
        body: 'As investigações científicas anteriores mostraram que os gatos não ronronam apenas quando estão felizes, mas também quando estão angustiados ou estão com medo. Ronronar é um mecanismo de defesa que têm e uma maneira de manter a calma em situações estressantes.',
        categoriaId: '5', // Assumindo que 'comportamento' corresponde à categoria 'treinamento'
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '7',
        title: 'Como fazer o gato obedecer?',
        metadescription: 'Sim! Se ele fez tudo direitinho merece um agrado',
        body: 'Para fazer o seu gato te obedecer, a maneira correta e também a mais efetiva, é criar uma rotina de recompensas para as atitudes corretas dele e de repreensão para aquelas que são desagradáveis. Assim, se o seu gato for obediente, recompense-o com petiscos ou carinho.',
        categoriaId: '5', // Assumindo que 'comportamento' corresponde à categoria 'treinamento'
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '8',
        title: 'Tartaruga: Um pet fácil de cuidar!',
        metadescription: 'A alimentação da tartaruga é simples e fácil de encontrar',
        body: 'A dieta deve contar com a ingestão de ração, frutas e vegetais como cenouras, maças e mamão, além de feijão verde e espinafre. Outro complemento essencial para a manutenção da proteína é a ingestão de tenébrios vivos ou desidratados. O normal é que um animal jovem coma mais carne, mas passe a preferir frutas e legumes quando for ficando idoso. A alimentação deve ser composta por aproximadamente 80% a 90% de legumes e flores e somente 10% a 20% de frutas.',
        categoriaId: '6', // Assumindo que 'bem-estar' corresponde à categoria 'saúde'
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('posts', null, {});
  }
};