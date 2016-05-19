var X = {
  each : function(arr){
    for(var i=0; i<arr.length; i++){
      console.log(arr[i]);
    }
  },

  max : function(arr){
    var max=arr[0];
    for(var i=0; i<arr.length; i++){
      if(max<arr[i]){
        max=arr[i];
      }
  }
  return max;
},

min : function(arr){
  var min=arr[0];
  for(var i=0; i<arr.length; i++){
    if(min>arr[i]){
      min=arr[i];
    }
}
return min;
},

sumup : function(arr){
  var sum=0;
  for(var i=0; i<arr.length; i++){
    sum=sum+i;
  }
  return sum;
}
}
