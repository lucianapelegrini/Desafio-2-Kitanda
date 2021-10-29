// retirar os produtos da lista de produtos
window.onload = function(){

    function calcular(idProduto, resultado){
      const preco         = document.querySelectorAll(`#${idProduto} > li`);
      const valorResultado= document.querySelector(`#${resultado}`);
      
      let totalzinho=0; 
  
      for(let i of preco ){
        totalzinho += Number(i.dataset.preco); 
      }

      valorResultado.value = totalzinho;
  }

  function removerProdutos(id){
   
     const lista = document.querySelectorAll(`#${id} > li`); 
  
     for(let produtos of lista){
  
      produtos.addEventListener('click',function(){
        produtos.remove();
        calcular('listaProdutos', 'Somatotal'); 
      })
  
    }
  }

  function adicionarProduto(produto) {
    
    let preco = produto.getAttribute('data-preco')
    let nome  = produto.textContent

    let liProduto = document.createElement('li');
    liProduto.setAttribute('data-preco', preco);
    liProduto.textContent = nome

    let listaProdutos = document.querySelector("#listaProdutos");
    listaProdutos.appendChild(liProduto);

    calcular('listaProdutos', 'Somatotal');
  }

  function init(id) {
    const lista = document.querySelectorAll(`#${id} > li`); 
  
     for(let produto of lista){
  
      produto.addEventListener('click', function(){
        adicionarProduto(produto)
      })
    }
  }

  calcular('listaProdutos', 'Somatotal')
  init('produtos')
      
      //( ()=>{
      /*
      let produtos = [
          {descricao: 'Mamão Papaia', preco:5.00},
          {descricao: 'Laranja', preco:2.50},
          {descricao: 'Manga', preco:4.90},
          {descricao: 'Melão', preco:5.90},
          {descricao: 'Melancia', preco:1.90}
      ]
      
      const listaProdutos = document.querySelector("#cestaDoCliente");
      const Total = document.querySelector("#Somatotal");
          let totalzinho=0;
      
          for( let pro of produtos ){
              const filhoLi = document.createElement('li');
      
              for( let listaP in pro ){
                
                  if( listaP == 'preco' ){
                      filhoLi.setAttribute('data-preco', pro[listaP] );
                      totalzinho += pro[listaP];
                  } else{
                      filhoLi.textContent = `${pro[listaP]}`;
                  }
                   listaProdutos.appendChild(filhoLi);
              }
              
          }
          Total.value = totalzinho.toFixed(2);    
      //} )(produtos)
      */
    }
      

  // trcar o . por , //
  //n1.tofixed (2).replace('.', ',')