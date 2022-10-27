let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  }; 
  console.log(`Bem vinda, ${info.personagem}!`);
  
  info['recorrente'] = 'sim'
 console.log(info.recorrente);

 for(let key in info) {
    console.log(key)
 };
  for (let key in info){
    console.log(info)
  };

  info2 = {
    personagem: 'Tio patinhas',
    origem:`Christmas on Bear Mountain, Dell's Four Color Comics #178`,
    nota:'o ultimo macpatinhas',
    recorrente:'sim',

  }

  for(let key in info) {
    if(info2.recorrente === 'sim'){
        console.log(info.recorrente =+ 'Ambos recorrentes')
    }else { console.log (info.recorrente =+ info2.recorrente)
        

    }
  }