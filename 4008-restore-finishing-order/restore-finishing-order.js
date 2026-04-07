/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
var recoverOrder = function(order, friends) {
    let arr = new Array() ; 
    let mp = new Map();
    for( let i =0 ; i < friends.length ; i ++ )
    {
        if (!mp.has(friends))
        {
            mp.set(friends[i] , 1);
        }
    }

    for (let i = 0 ; i < order.length ; i++ )
    {
        if (mp.has(order[i]))
            arr.push (order[i]);
    }

    
    return arr;
};