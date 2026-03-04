var Transactions = [
  {
    type: "st",
    Amount_type: 'USD',
    Date: '03/4/2026',
    sender: '0612091248',
    prev_balance: 800,
    reciever: '0615998193',
    Amount: 200
  }
]
// console.log(Transactions)
const pin = 1515;
let phoneNumber = '0612091248'
let balance = 1000;
let option1 = "Dooro adeega aad rabtid \n";
let option2 = "1. itus haraagaaga \n";
let option3 = "2. U wareeji \n";
let option4 = "3. Kaarka ku hadalka \n";
let option5 = "5. Salaam Bank \n";
let option6 = "6. Ka bax";

const options = Number(prompt("fadlan geli pinkaaga"));

if (options == pin) {
  const choice = Number(
    prompt(
      "fadlan dooro adeega aad rabtid \n" +
        option1 +
        option2 +
        option3 +
        option4 +
        option5 +
        option6,
    ),
  );
  if (choice === 1) {
    alert("haraagaagu waa :$" + balance);
  } else if (choice === 2) {
    const recipent = prompt("fadlan u wareeji lambarka aad rabtid");
    const amount = Number(
      prompt("fadlan gali lacagta aad rabtid in aad u dirto"),
    );
    if (amount > balance) {
      alert("ma haysatid lacag kugu filan");
    } else if (amount <= 0) {
      alert("Fadlan geli lacag sax ah.");
    } else {
      Transactions.push(
      {
        type: 'sent',
        Amount_type: 'USD',
         Date: '03/4/2026',
         sender: phoneNumber,
         prev_balance: balance,
         reciever: recipent,
        Amount: amount
      },
      {
         type: 'Reciever',
        Amount_type: 'USD',
         Date: '03/4/2026',
         sender: phoneNumber,
         prev_balance: balance,
         reciever: recipent,
        Amount: amount
      }
    )
   const filteredTransaction =  Transactions.map(transaction => transaction.Amount >= 500 && transaction.Date);
   console.log(filteredTransaction);
      console.log(Transactions);
      balance -= amount;
      alert(
        "Waxaad $" +
          amount +
          " u wareejisay " +
          recipent +
          "\nHaraagaagu waa: $" +
          balance,
      );
    }
  } else if (choice === 3) {
    const recipent = prompt(
      "fadlan geli lambarka aad u rabtid in aad ku shubto kaarka ku hadalka",
    );
    const amount = Number(prompt("fadlan geli lacagta saxda ah"));
    
    if (amount > balance) {
      alert("ma haysatid lacag kugu filan");
    } else if (amount <= 0) {
      alert("fadlan geli lacgta saxda ah");
    } else {
      
      balance -= amount;
      alert(
        "waxaad $" +
          amount +
          "kaar ku hadal ugu shubtay" +
          recipent +
          "\n Haraagaagu waa $" +
          balance,
      );
    }
  } else if (choice === 4) {
    const bankAmount = Number(
      prompt("Geli lacagta aad u wareejinayso Salaam Bank:"),
    );
    if (bankAmount > balance) {
      alert("koontadaada kugu ma filna");
    } else if (bankAmount <= 0) {
      alert("fadlan dir lacagta saxda ah");
    } else {
      balance -= bankAmount;
      alert(
        "Waxaad $" +
          bankAmount +
          " u wareejisay Salaam Bank" +
          "\nHaraagaagu waa: $" +
          balance,
      );
    }
  } else if (choice === 0) {
    alert("Mahadsanid isticmaalka EVC-PLUS");
  }
} else {
  alert("fadlan geli pinkaaga saxda ah");
}
