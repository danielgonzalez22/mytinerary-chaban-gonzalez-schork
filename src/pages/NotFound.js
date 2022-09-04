import WebsiteLayout from '../layouts/WebsiteLayout'
import '../styles/NotFound.css'
export default function NotFound() {
    return (
        <WebsiteLayout>
            <div className="notFound-container">
                <h1 className='notfound-title'>PAGE NOT FOUND</h1>
            </div>
        </WebsiteLayout>
    )
}