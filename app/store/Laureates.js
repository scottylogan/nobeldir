Ext.define('NobelDir.store.Laureates', {
	extend: 'Ext.data.Store',

	config: {
		model: 'NobelDir.model.Laureate',
		sorters: 'year',
		grouper: function (record) {
			return record.get('lastName')[0];
		},
		data: [
			{
				"firstName": "Kenneth",
				"middleName": "J.",
				"lastName": "Arrow",
				"year": "1972",
				"category": "economics",
				"displayCategory": "Economics",
				"shortBio": "Professor Emeritus in the Department of Economics, shared the 1972 Nobel Prize in Economics for pioneering contributions to general economic equilibrium theory and welfare theory.",
				"bioUrl": "http://www.nobelprize.org/nobel_prizes/economics/laureates/1972/arrow.html",
				"headshot": "Arrow_68.jpg",
				"photo": "Arrow_180.jpg"
			},
			{
				"firstName": "Paul",
				"middleName": "",
				"lastName": "Berg",
				"year": "1980",
				"category": "chemistry",
				"displayCategory": "Chemistry",
				"shortBio": "Professor Emeritus in the Department of Biochemistry, shared the 1980 Nobel Prize in Chemistry for his fundamental studies of the biochemistry of nucleic acids, with particular regard to recombinant DNA.",
				"bioUrl": "http://www.nobelprize.org/nobel_prizes/chemistry/laureates/1980/berg.html",
				"headshot": "Berg_68.jpg",
				"photo": "Berg_180.jpg"
			},
			{
				"firstName": "Steven",
				"middleName": "",
				"lastName": "Chu",
				"year": "1997",
				"category": "physics",
				"displayCategory": "Physics",
				"shortBio": "Professor in the Departments of Physics and Applied Physics, Emeritus, shared the 1997 Nobel Prize in Physics for development of methods to cool and trap atoms with laser light.",
				"bioUrl": "http://www.nobelprize.org/nobel_prizes/physics/laureates/1997/chu.html",
				"headshot": "Chu_68.jpg",
				"photo": "Chu_180.jpg"
			},
			{
				"firstName": "Robert",
				"middleName": "B.",
				"lastName": "Laughlin",
				"year": "1998",
				"category": "physics",
				"displayCategory": "Physics",
				"shortBio": "Professor in the Departments of Physics, shared the 1998 Nobel Prize in Physics for explaining the fractional quantum Hall effect, in which electrons flowing in a semiconductor subjected to strong electromagnetic fields act like a liquid made up of “particles” with an electrical charge that is a fraction of that of an electron.",
				"bioUrl": "http://www.nobelprize.org/nobel_prizes/physics/laureates/1998/laughlin.html",
				"headshot": "Laughlin_68.jpg",
				"photo": "Laughlin_180.jpg"
			},
			{
				"firstName": "Douglas",
				"middleName": "",
				"lastName": "Osheroff",
				"year": "1996",
				"category": "physics",
				"displayCategory": "Physics",
				"shortBio": "Professor Emeritus in the Department of Physics, shared the 1996 Nobel Prize in Physics for the discovery of superfluidity in helium-3.",
				"bioUrl": "http://www.nobelprize.org/nobel_prizes/physics/laureates/1996/osheroff.html",
				"headshot": "Osheroff_68.jpg",
				"photo": "Osheroff_180.jpg"
			},
			{
				"firstName": "Martin",
				"middleName": "",
				"lastName": "Perl",
				"year": "1995",
				"category": "physics",
				"displayCategory": "Physics",
				"shortBio": "Professor Emeritus at the SLAC National Accelerator Laboratory, shared the 1995 Nobel Prize in Physics for his discovery of the tau lepton.",
				"bioUrl": "http://www.nobelprize.org/nobel_prizes/physics/laureates/1995/perl.html",
				"headshot": "Perl_68.jpg",
				"photo": "Perl_180.jpg"
			},
			{
				"firstName": "Burton",
				"middleName": "",
				"lastName": "Richter",
				"year": "1976",
				"category": "physics",
				"displayCategory": "Physics",
				"shortBio": "Professor Emeritus at the SLAC National Accelerator Laboratory, shared the 1976 Nobel Prize in Physics for the discovery of the psi particle and for pioneering work in high-energy physics.",
				"bioUrl": "http://www.nobelprize.org/nobel_prizes/physics/laureates/1976/richter.html",
				"headshot": "Richter_68.jpg",
				"photo": "Richter_180.jpg"
			},
			{
				"firstName": "Myron",
				"middleName": "",
				"lastName": "Scholes",
				"year": "1997",
				"category": "economics",
				"displayCategory": "Economics",
				"shortBio": "Professor Emeritus at the Graduate School of Business, shared the 1997 Nobel Prize in Economics for a new method to determine the value of derivatives.",
				"bioUrl": "http://www.nobelprize.org/nobel_prizes/economics/laureates/1997/scholes.html",
				"headshot": "Scholes_68.jpg",
				"photo": "Scholes_180.jpg"
			},
			{
				"firstName": "William",
				"middleName": "F.",
				"lastName": "Sharpe",
				"year": "1990",
				"category": "economics",
				"displayCategory": "Economics",
				"shortBio": "Professor Emeritus at the Graduate School of Business, shared the 1990 Nobel Prize in Economics for his contributions to the theory of price formation for financial assets, the Capital Asset Pricing Model (CAPM).",
				"bioUrl": "http://www.nobelprize.org/nobel_prizes/economics/laureates/1990/sharpe.html",
				"headshot": "Sharpe_68.jpg",
				"photo": "Sharpe_180.jpg"
			},
			{
				"firstName": "A.",
				"middleName": "Michael",
				"lastName": "Spence",
				"year": "2001",
				"category": "economics",
				"displayCategory": "Economics",
				"shortBio": "Professor Emeritus at the Graduate School of Business, and Joseph E. Stiglitz, Professor Emeritus in the Department of Economics, shared the 2001 Nobel Prize in Economics for their analyses of markets with asymmetric information.",
				"bioUrl": "http://www.nobelprize.org/nobel_prizes/economics/laureates/2001/spence.html",
				"headshot": "Spence_68.jpg",
				"photo": "Spence_180.jpg"
			},
			{
				"firstName": "Joseph",
				"middleName": "E.",
				"lastName": "Stiglitz",
				"year": "2001",
				"category": "economics",
				"displayCategory": "Economics",
				"shortBio": "Professor Emeritus in the Department of Economics, and A. Michael Spence, Professor Emeritus at the Graduate School of Business, shared the 2001 Nobel Prize in Economics for their analyses of markets with asymmetric information.",
				"bioUrl": "http://www.nobelprize.org/nobel_prizes/economics/laureates/2001/stiglitz.html",
				"headshot": "Stiglitz_68.jpg",
				"photo": "Stiglitz_180.jpg"
			},
			{
				"firstName": "Richard",
				"middleName": "E",
				"lastName": "Taylor",
				"year": "1990",
				"category": "physics",
				"displayCategory": "Physics",
				"shortBio": "Professor Emeritus at the SLAC National Accelerator Laboratory, shared the 1990 Nobel Prize in Physics for investigations concerning deep inelastic scattering of electrons on protons and bound neutrons that have been of essential importance for the development of the quark model in particle physics.",
				"bioUrl": "http://www.nobelprize.org/nobel_prizes/physics/laureates/1990/taylor.html",
				"headshot": "Taylor_68.jpg",
				"photo": "Taylor_180.jpg"
			}
		]
	}
});