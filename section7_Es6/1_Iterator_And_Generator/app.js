function makeItemIterator(items){
    let nextIndex = 0;
    const itemIterator = {
        next: function(){
            let result;
            result = nextIndex < items.length ? {
                value: items[nextIndex++],
                done: false
            }: {
                done: true
            }

            return result
        }
    }

    return itemIterator;
}

const itemsArr = ['Milk', 'Apple', 'Fish'];
const itemIterator = makeItemIterator(itemsArr);
// console.log(itemIterator.next());
// console.log(itemIterator.next());
// console.log(itemIterator.next());
// console.log(itemIterator.next());
// console.log(itemIterator.next());

function* makeItemGenerator(items){
    for (let i = 0; i < items.length; i++) {
        yield items[i];
    }
}

const itemGenerator = makeItemGenerator(itemsArr);

let result = itemGenerator.next();
while(!result.done){
    console.log('Generator Result : ' + result)
    result = itemGenerator.next();
}


