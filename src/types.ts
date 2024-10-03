type Address = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: { lat: string; lng: string}
}

type Company = {
    bs: string;
    catchPhrase: string;
    name: string;
}

export type User = {
    address: Address;
    company: Company;
    email: string;
    id: number;
    name: string;
    phone: string;
    username: string;
    website: string;
}