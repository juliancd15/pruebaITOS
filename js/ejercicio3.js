let array = [];

for(i=0; i<19; i++) {
    array.push(Math.floor(Math.random()*100));
}
    let Long = array.length;

    document.write('<div class="container">');
    document.write('<h2> Array inicial: </h2>'); 
    document.write('<h4 style="color: grey">' + array + '</h4>');
    document.write('<hr>');
    
    for(let i=0; i < Long; i++){
      for(let j=i+1; j < Long; j++){
        var a = 0;
        if(array[i]>array[j]){
          a = array[i];  
          array[i] = array[j];
          array[j] = a
        }  
      }
    }

    document.write('<h2>Sort menor a mayor: </h2>');
    document.write('<h4 style="color: grey">' + array + '</h4>');
    document.write('</div>');