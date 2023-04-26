
export default function Footer(){
    const gitHub = "https://github.com/brianpinney"
    const currentYear=new Date().getFullYear()
    return (
        <>
        <footer>&copy; {currentYear}</footer>
        </>
    )
}