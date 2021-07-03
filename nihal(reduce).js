var arr=[
    {
      "_id": "60e072309a948969e2147e39",
      "index": 0,
      "guid": "9f62c862-fc4f-4c2b-8940-bfd1e6f5b8a1",
      "isActive": false,
      "balance": "$3,478.88"
    },
    {
      "_id": "60e07230fc638378c0d82729",
      "index": 1,
      "guid": "1e578b27-ccad-4e6a-93d9-91b1d6eb45b8",
      "isActive": true,
      "balance": "$2,433.10"
    },
    {
      "_id": "60e072309b9de253e82f03d1",
      "index": 2,
      "guid": "8b72a85f-5975-499d-bf4a-37b3bfd2fabd",
      "isActive": false,
      "balance": "$2,624.01"
    },
    {
      "_id": "60e0723041cb39ed565c1c16",
      "index": 3,
      "guid": "466a0956-0b21-4970-b2bd-ebc4a713015a",
      "isActive": false,
      "balance": "$3,312.07"
    },
    {
      "_id": "60e072308c0924ee74c5a01b",
      "index": 4,
      "guid": "963e0012-811f-40ee-bcad-37ceb36dda3d",
      "isActive": true,
      "balance": "$1,042.71"
    },
    {
      "_id": "60e0723008df1979b4ab98d2",
      "index": 5,
      "guid": "c1734a7d-ae37-4d1d-a288-4b815b40da5c",
      "isActive": true,
      "balance": "$1,947.20"
    },
    {
      "_id": "60e0723045e19ac579f3ad90",
      "index": 6,
      "guid": "a11f5891-fd5d-44c9-91e0-fe4e0ae59c76",
      "isActive": true,
      "balance": "$2,910.47"
    }
  ];
  var result=arr.reduce(function(sever,item)
  {
      var str=item.balance;
      var a=str.slice(1,2);
      var b=str.slice(3,item.balance.length);
      str=a+b;
      console.log(parseFloat(str));
      sever=sever+parseFloat(str);
      return sever;
  },0);
  console.log(result);
  
