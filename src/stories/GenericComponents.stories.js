import CardComponent from "../components/generic/CardComponent";
import AccountSelector from "../components/AccountSelector";

export default {
    title: 'GenericComponents/Card',
    component: CardComponent
}

const accounts = [
    {
        id: '1',
        accountHolder: 'Keshav Sharma',
        accountNumber: '1234567890',
        accountBalance: '123'
    },
    {
        id: '2',
        accountHolder: 'Madhav Sharma',
        accountNumber: '32345454663',
        accountBalance: '1456'
    }
]

export const Card = () => <CardComponent content="My name is Keshav." />

export const SelectAccount = () => <AccountSelector accounts={accounts} />

