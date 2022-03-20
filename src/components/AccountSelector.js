import React, { useState, useEffect } from 'react'
import { AiOutlineRight } from 'react-icons/ai'
import { FaAtlassian } from 'react-icons/fa'
import CardComponent from './generic/CardComponent'
import '.././index.css';
import ModalComponent from './ModalComponent';

function AccountSelector(props) {
    const [showModal, setShowModal] = useState(false);
    const [accounts, setAccounts] = useState([]);
    const [selectedAccount, setSelectedAccount] = useState({});

    useEffect(() => {
        setAccounts(props.accounts);
        setSelectedAccount(props.accounts[0])
        return () => {
            // cleanup
        }
    }, [])

    return (
        <div>
            <CardComponent>
                <div className="grid grid-cols-6 m-3 cursor-pointer" onClick={() => setShowModal(!showModal)}>
                    <div className="align-middle mt-auto mb-auto text-lg col-span-1 text-green-800"><FaAtlassian /></div>
                    <div className="col-span-4">
                        <div className="font-bold text-green-600">MOB: {selectedAccount.accountHolder}</div>
                        <div className="text-gray-500">{selectedAccount.accountNumber}</div>
                        <div className="text-gray-500">
                            {selectedAccount.accountBalance ?? 'hell'}
                        </div>
                    </div>
                    <div className="align-middle mt-auto mb-auto text-lg col-span-1">
                        <AiOutlineRight style={{color: 'green'}}/>
                    </div>
                </div>
                <ModalComponent 
                    show={showModal}
                    onHide={() => setShowModal(false)}
                    accounts={accounts}
                    selectedAccount={selectedAccount}
                    selectedAccountChanged={(newAccount) => setSelectedAccount(newAccount)} />
            </CardComponent>
        </div>
    )
}

export default AccountSelector
