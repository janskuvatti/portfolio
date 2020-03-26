//Animaation scripti

const n = document.querySelectorAll('#name path');
console.log(n);
for(let a = 0; a < n.length; a++){
 console.log(`Letter ${[a]} is ${n[a].getTotalLength()} `) ;
}
var firebaseConfig = {
			apiKey: "AIzaSyDVWeVp8NseVZCm90EEPkFSgRWJZkM-pzs",
			authDomain: "lomake-2f895.firebaseapp.com",
			databaseURL: "https://lomake-2f895.firebaseio.com",
			projectId: "lomake-2f895",
			storageBucket: "lomake-2f895.appspot.com",
			messagingSenderId: "554856486393",
			appId: "1:554856486393:web:1247f837bfffe4a1"
		};
		// Initialize Firebase
		firebase.initializeApp(firebaseConfig);
		//Lomakkeen tietojen lähetys Firebaseen
		function laheta() {
			var nimi = document.getElementById("nimi ").value;
			var email = document.getElementById("sposti ").value;
			var viesti = document.getElementById("viesti ").value;
			var puhelin = document.getElementById("puh ").value;
			var valinta = document.getElementById("valikko ").value;


			var db = firebase.firestore();



			db.collection("yhteydenottolomake ").add({



					Nimi: nimi,
					Sposti: email,
					puhelin: puhelin,

					viesti: viesti,
					yhteydenotto: valinta

				})

				.then(function() {
					console.log(
						"Document successfully written! "
					);
				})
				.catch(function(error) {
					console.error("Error writing document ",
						error
					);
				});

			document.getElementById("modal").innerHTML = ("Kiitos yhteydenotostasi " + nimi + "! Otan sinuun yhteyttä sähköpostilla osoitteeseen " + email + " tai puhelimitse numeroon " + puhelin);
		}
		$.getJSON("skills.json",
		function(data) {
			//	var skills = data.skills;
			var items = [];
			var skills = data.skills;

$.each(skills, function(key, d) {
//					// lue json items-taulukkoon
	items.push(" &#9733" + d + "<br>")
//
		})
//
//				var ohjelmointi = data.ohjelmointi;
//				items.push("<p>Ohjelmointi:<ul>");
//				$.each(ohjelmointi, function(key, d) {
//					// lue json items-taulukkoon
//					items.push(" &#9733" + d + "<br>")
//
//				});
//				items.push("</ul></p>")
//
//				var suunnittelu = data.suunnittelu;
//				items.push("<p>Suunnittelu:<ul>");
//				$.each(suunnittelu, function(key, d) {
//					// lue json items-taulukkoon
//					items.push(" &#9733" + d + "<br>")
//
//				});
//				items.push("</ul></p>")
//
//				var muut = data.muut;
//				items.push("<p>Muuta:<ul>");
//				$.each(muut, function(key, d) {
//					// lue json items-taulukkoon
//					items.push(" &#9733" + d + "<br>")
//
//				});
//				items.push("</ul></p>") *


				$("#taidot").append(items.join(" "));
	})