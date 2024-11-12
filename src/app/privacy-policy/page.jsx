'use client'
import { useSideHeader } from '@/utils/SideHeaderToggle'
import React, { useEffect } from 'react'

const page = () => {
    const { addTitle } = useSideHeader()
    useEffect(() => {
        addTitle("Privacy Policy")
    }, [])
    return (
        <div class="container mt-28">
            <h1 className='text-center text-[32px] font-bold'>Privacy Policy</h1>
            <div className='mt-6'>
                <br />
                <br />
                <h1 className='text-xl mb-2'>About the Policy</h1>

                <p>The privacy of our clients is our top priority and we respect it as our own. Even though we collect
                    information from our clients, it is only to improve our customer services. Our company does
                    recognize that the maintenance and use of our clients’ information is our responsibility. We DO NOT
                    rent or sell the information that our client provides to us online.
                    <br />
                    This policy describes how the personal information of our client collected by us is used, why we
                    collect it, and how we use it. It is within our policy that we describe the choices you can make
                    about how we can collect and use your information.
                </p>
                <br />
                <br />
                <h1 className='text-xl mb-2'>SMS opt in</h1>
                <p>The information collected by our company includes the client’s name, e-mail/ snail mail, phone
                    number, and credit card number. These are pieces of information that the client provides the company
                    while ordering or while saving the information with our company. We may also use the email addresses
                    or snail mail addresses which we receive through our mailing system for comments, queries, etc.
                    <br />

                    Our company also maintains records of the items, which have interested our clients in the past, as
                    well as the client’s purchases online.
                </p>
                <br />
                <br />
                <h1 className='text-xl mb-2'>Use of Collected Data </h1>

                <p>The information collected is used in many diversified methods. Our company uses the information saved
                    by our clients to process their orders. We will also send them e-mails to confirm the order and our
                    customer services may also contact them via phone, snail-mail or e-mail if our company has other
                    queries regarding the order placed.
                    <br />

                    As a client, one might also receive updates regarding our site and services. Besides, we may also
                    use the information about your interests and purchases to help our company improve our site design
                    and the client’s purchasing experience.
                </p>
                <br />
                <br />
                <h1 className='text-xl mb-2'>3rd Party Sharings</h1>
                <p>Personal information will not be released to third parties other than our domains. There are no other
                    circumstances under which we will provide or sell personal information to third parties.
                </p>
                <br />
                <br />
                <h1 className='text-xl mb-2'>Security of Personal Information </h1>

                <p>The information of our clients is secure, as it is protected during transmission by the use of the
                    Secure Sockets Layer (SSL) software, which encrypts the information the client puts in.
                </p>
                <br />
                <br />
                <h1 className='text-xl mb-2'>Access to Registered Accounts </h1>
                <p>The client can access their registered accounts by signing in on our homepage. Once signed in, the
                    client has access to their previous lists and information that they have already submitted to the
                    site.
                </p>
                <br />
                <br />
                <h1 className='text-xl mb-2'>Claim Your Refund </h1>
                <p>To have your refund, follow the following steps:
                    <br />
                    You can claim your refund by:
                    <br />

                    Dialing our Toll Free Number # (737) 373-4100
                    <br />

                    Live Chat. Click here to start chat now
                    <br />

                    Sending us an Email.
                    <br />

                    As soon as we receive your refund request, we will respond to it at our earliest, once the required
                    analysis is completed we will initiate the process.
                    <br />

                    After you have received your refund, you will not have any rights to any designs submitted by PBD,
                    the information will be submitted to the Copyright Acquisition of the Government Copyright Agencies
                    to maintain legality.
                </p>
                <br />
                <br />
                <h1 className='text-xl mb-2'>Changing & Deleting/Unsubscribing Accounts </h1>

                <p>The client has to send an email to request the cancellation of subscriptions. This shall prevent the
                    user from receiving e-mail communications relating to any online order they might have placed at the
                    site.
                </p>
                <br />
                <br />
                <h1 className='text-xl mb-2'>Cookies and Their Use </h1>

                <p>Cookies are alphanumeric identifiers that are transferred to the clients’ computer’s hard drive
                    through their Web browser. This enables our systems to recognize the clients’ browser and storage of
                    items in your Shopping Cart during visits.
                    <br />
                    The Help portion of the toolbar on most browsers will be more helpful in explaining how to prevent
                    the browser from accepting new cookies, how to have the browser notify the user when a new cookie is
                    received, or how to disable cookies altogether. However, cookies allow you to take full advantage of
                    the top features at our site, and our company recommends that the client leaves them to be accepted.
                </p>

            </div>
        </div>
    )
}

export default page
