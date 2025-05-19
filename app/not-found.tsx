import NotFoundClient from '@/components/not-found/Client'

export default async function NotFound() {
    // console.log('exec 404 page')
    // const res = await (await fetch('http://localhost:3000/api/thirdroom/assignCustomer', { next: { revalidate: 10 }})).json();
    // console.log('server fetch res', res);
    return (
        <NotFoundClient />
    )
}