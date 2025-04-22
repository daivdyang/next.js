import Layout from '@/app/layout';
import styles from '@/app/not-found.module.css';

export default async function Custom404() {
    console.log('exec 404 page')
    // const res = await (await fetch('http://localhost:3000/api/thirdroom/assignCustomer', { next: { revalidate: 10 }})).json();
    // console.log('server fetch res', res);
    return (
        <Layout>
            <div className={`w-screen h-screen flex justify-center items-center ${styles['not-found']}`}>
                <h5>This 404 page</h5>
                {/* <div>{ res.message }</div> */}
            </div>
        </Layout>
    )
}