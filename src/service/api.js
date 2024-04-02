export const getApi= async(show)=>{
    return await fetch('https://api.escuelajs.co/api/v1/products')
    .then(a=>a.json())
    .then(a=>{
        a.map((a)=>{
            if(a.images[0]== "[\"https://placeimg.com/640/480/any\"]"  || a.images[0]=="[\"https://via.placeholder.com/150\"]" || a.images[0]== "[\"https://firebasestorage.googleapis.com/v0/b/platzi-store-forms.appspot.com/o/image.png?alt=media&token=67e48c8d-a351-41dd-b495-811e0317a451\"]" || a.images[0]=="[\"https://i.imgur.com/9LFjwpI.jpeg\"" || a.images[0]=="[\"https://ejemplo.com/imagen.jpg\"]" || a.images[0]==
            "[\"https://avatars.mds.yandex.net/i?id=c010deaaaaf45ce82017ec0385322700419e094f-12613135-images-thumbs&n=13\"]" ){
                a.images = [a.category.image]
            }
        })

        // if(a.images[0]=='[\"https://placeimg.com/640/480/any\"]'){
        //     // a.images=[
        //     //     a.category.image
        //     // ]
        // }
        show(false)
        return a
    })

}

export const getDetailProduct = async(id,callback)=>{
    return await fetch(`https://api.escuelajs.co/api/v1/products${id}`)
    .then(a=>a.json())
    .then(a=>console.log(a))
}