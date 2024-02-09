try {
    // É executada quando NÃO há erros
    //console.log(a);
    console.log('Try: Abri um arquivo');
    console.log('Try: Manipulei um arquivo e gerou erro');
    console.log('Try: Fechei o arquivo');
} catch (e) {
    // É executada quando HÁ erros
    console.log(e);
    console.log('Catch: Tratando o erro');
} finally {
    // EXECUTA SEMPRE 
    console.log('Finally: Eu sempre sou executado');
}