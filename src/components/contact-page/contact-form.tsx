
export function ConatctForm() {
  return (
    <form className="flex  flex-col gap-6 max-w-[500px] mt-12 w-full" >
      <h1 className="text-2xl">Entre em Contato</h1>
      <p className="text-md">
        Envia uma mensagem e deixa nos saber sobre suas dúvidas e sugestões.
      </p>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="">Email</label>
        <input type="text" placeholder="Seu e-mail" className="w-full px-4 py-2 rounded-md bg-neutral-100" />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="">Mensagem</label>
        <textarea placeholder="Escreva aqui sua mensagem..." className="w-full px-4 py-2 rounded-md min-h-[100px] bg-neutral-100" />
      </div>
      <button className="mt-8 w-full bg-green-500 p-4 rounded-md text-sm uppercase font-semibold text-white">
        Envia Mensagem
      </button>
    </form >
  )
}