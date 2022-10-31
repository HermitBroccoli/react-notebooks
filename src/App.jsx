import {useState} from 'react'

//import slqlite from 'sqlite3'

function App() {

//    let db = new slqlite.Database('db.sqliet3')

//    db.serialize(()=>{
//
//    })

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [show, setShow] = useState(false)
    const [note, setNote] = useState([])

    document.body.style = 'background: #2E8B57;'

    const addNote = () => {
        setNote([...note, {"title": title, "body": body}])
        setBody("")
        setTitle("")
        setShow(false)
    }

    const deleteNote = (i) => {
        let copy = Object.assign([], note)
        copy.splice(i, 1)
        setNote(copy)
    }

    return (

        <div>
            <div
                className={show ? 'modal w-full h-[100vh] bg-black/50 flex items-center justify-center fixed top-0 left-0' : 'hidden'}>
                <div className="modal w-[550px] min-h-[350px] bg-white p-6 rounded">
                    <div>
                        <label>Заголовок</label>
                        <input type="text" id="title" className="border rounded ml-[10px]"
                               value={title}
                               maxLength="25"
                               onChange={event => setTitle(event.target.value)}/>
                    </div>
                    <div className="flex flex-col">
                        <label>Записка</label>
                        <textarea id="note" placeholder="Введите текст..."
                                  maxLength="100"
                                  value={body}
                                  onChange={event => setBody(event.target.value)}
                                  className="border p-2 rounded w-full h-[250px] resize-none"/>
                    </div>

                    <div className="flex justify-end mt-[25px]">
                        <button type="button" className="bg-green-700 px-[10px] py-[5px] text-white rounded"
                                onClick={addNote}>Добавить
                        </button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto py-[50px] flex items-center  justify-between flex-wrap">
                <div className="w-[250px] h-[250px] bg-white rounded flex items-center justify-center mb-[20px]">
                    <button onClick={() => {
                        setShow(true)
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-[100px] h-[100px]">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </button>
                </div>

                {note.map((val, key) => {
                        return (
                            <div
                                className="w-[250px] h-[250px] bg-white rounded p-[20px] break-words flex flex-col justify-between mb-[20px]"
                                key={key}>
                                <div className="note-header break-words">
                                    <h2 className="border-b font-bold text-[20px]">{val.title}</h2>
                                </div>

                                <div className="note-body break-words w-full h-full mt-[10px]">
                                    {val.body}
                                </div>

                                <div className="note-footer">
                                    <button onClick={deleteNote} className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-[5px]">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"/>
                                        </svg>
                                        Удалить
                                    </button>
                                </div>
                            </div>
                        )
                    }
                )
                }
            </div>
        </div>
    )
}

export default App
