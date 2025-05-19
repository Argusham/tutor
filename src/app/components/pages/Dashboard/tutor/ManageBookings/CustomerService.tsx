const CustomerService = new Promise<any>((resolve, reject) => {
    setTimeout(() => {
        resolve([
            {
                id: 1000,
                name: 'James Butt',
                country: {
                    name: 'Algeria',
                    code: 'dz'
                },
                company: 'Benton, John B Jr',
                date: '2015-09-13',
                status: 'unqualified',
                verified: true,
                activity: 17,
                representative: {
                    name: 'Ioni Bowcher',
                    image: 'ionibowcher.png'
                },
                balance: 70663
            },
            {
                id: 1001,
                name: 'Luke Crack',
                country: {
                    name: 'England',
                    code: 'en'
                },
                company: 'Benton, John B Jr',
                date: '2015-09-13',
                status: 'qualified',
                verified: true,
                activity: 17,
                representative: {
                    name: 'Ioni Bowcher',
                    image: 'ionibowcher.png'
                },
                balance: 70663
            },
            {
                id: 1002,
                name: 'Tom Aura',
                country: {
                    name: 'Nigeria',
                    code: 'ng'
                },
                company: 'Benton, John B Jr',
                date: '2015-09-13',
                status: 'unqualified',
                verified: false,
                activity: 17,
                representative: {
                    name: 'Ioni Bowcher',
                    image: 'ionibowcher.png'
                },
                balance: 70663
            },
        ]);
    }, 4000);
});

export default CustomerService;
