const questions = fetch('http://localhost:5200/vianca/api.php', {
  method: 'GET'
});

const countBy = (collection, collection2, attr) => {
    return collection.map((comp) => {
        let contador = 0;
        collection2.forEach((item) => {
            if(item[attr] === comp){
            contador++;
            }
        });

        return contador;
    });
}

const getBy = (data, attr, value) => {
    return data.filter(item => item[attr] === value)
}

const getListUnique = (data, attr) => {
    return data.map((item) => item[attr])
                .filter((item, index, obj) => {
                    return index === obj.indexOf(item)
                })
}

const getValues = (data, attr) => {
    return data.filter((item) => item[attr]);
}
