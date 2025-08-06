import { useState, useEffect } from 'react';
import '../TudoList.css';
import Icone from '../assets/ícon.webp';



function TudoList() {
    const listaStorage = localStorage.getItem('lista');
    const initialList = listaStorage ? JSON.parse(listaStorage) : [lista];

    const [novoItem, setnovoItem] = useState('');
    const [lista, setLista] = useState(initialList);
    
    useEffect(() => {localStorage.setItem('lista', JSON.stringify(lista))}, [lista]);
    


    function adicionarItem(form) {
        form.preventDefault();
        if (!novoItem){
            return
        }                        
        setLista([...lista, {text: novoItem, iscompleted: false }]);
        setnovoItem('');
        document.getElementById('input-entrada').focus();
    }
    function clicou(index) {
        const newList = [...lista];
        newList[index].iscompleted = !newList[index].iscompleted;
        setLista(newList);
    };
    function deleta(index) {
        const newList = [...lista];
        newList.splice(index, 1);
        setLista(newList);
    };
    function deletaTudo() {
        setLista([]);
    };

    return (
        <div> 
        <h1>Lista de Tarefas</h1>
        <form action="" onSubmit={adicionarItem}>
            <input id='input-entrada' type='text' value={novoItem}
            onChange={(e) => setnovoItem(e.target.value)}
            placeholder='Digite uma tarefa'
            />
            <button className='add' type='submit'>Add</button>
        </form>
        <div className='Lista Tarefas'>
           <div style={{textAlign: 'center'}}>
            {lista.length <1?
                <img src={Icone}/> 
                :
                lista.map((item, index) => (
                    <div key={index} className={`Item ${item.iscompleted ? 'completo' : 'Item'}`}>
                        <span onClick={()=>{clicou(index)}}>{item.text}</span>
                        <button onClick={()=>{deleta(index)}} className='del'>Deletar</button>
                    </div>
                ))  
            }
              </div>
              {
                lista.length > 0 &&
            <button onClick={()=>{deletaTudo()}} className='deleteAll'>Deletar Tudo</button>
              }
        </div>
        </div>
    )
}
export default TudoList;
