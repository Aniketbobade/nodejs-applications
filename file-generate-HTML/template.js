const htmlContent= (firstName,lastName,email)=>{
    return `
    <h1>Hello ${firstName} ${lastName}!</h1>
    <p>welcome to our platform, your email is ${email}</p>
    `
}

module.exports= htmlContent;