import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Element } from "react-scroll";
import { pokemonActions } from "./../store";
import Splash from "./../components/Splash";
import FakeCard from "../components/FakeCard";
import Pagination from "./../components/Pagination";
import Modal from "./../components/Modal";
import Detail from "./Detail";

const Home = () => {
    const dispatch = useDispatch()
    const pokemon = useSelector(x => x.pokemon.all)
    const initModal = {
        show: false,
        data: {}
    }
    const [loading, setLoading] = useState(true)
    const [param, setParam] = useState({
        offset: 0,
        limit: 20
    })
    const [modal, setModal] = useState(initModal)
    const handleModalOpen = (name, url) => {
        const id = url.lastIndexOf("/") + 1

        setModal({
            show: true,
            data: { name, id }
        })
    }

    const handleChangeParam = (num) => {
        setParam({ ...param, offset: num })
        setLoading(true)
    }

    let loadingCard = []

    for (let i = 0; i < param.limit; i++) {
        loadingCard.push(<FakeCard key={`fakecard-${i}`} />)
    }

    useEffect(() => {
        if (loading) dispatch(pokemonActions.getAll({ param }))
        return () => setLoading(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading])

    return (
        <>
            <Splash />

            <Element id="Section-Content">
                <div className="content-wrapper" id="Monster">
                    <div className="content">
                        <h2 className="content-head text-center">List of all monsters</h2>

                        <div className="pure-g">
                            {pokemon.loading && loadingCard}
                            {!pokemon.loading && pokemon.error &&
                                <div className="card pure-u-1 pure-u-md-1 pure-u-lg-1">
                                    <div className="card-body text-center">
                                        <h4>{pokemon.error}</h4>
                                    </div>
                                </div>
                            }
                            {!pokemon.loading && !pokemon.error &&
                                pokemon.data.results.map((row, i) => (
                                    <div key={i} className="card pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                                        <div className="card-body text-center">
                                            <h4 className="text-uppercase">{row.name}</h4>
                                            <div className="overlay">
                                                <button
                                                    type="button"
                                                    className="pure-button text-uppercase"
                                                    onClick={() => {
                                                        handleModalOpen(row.name, row.url)
                                                    }}>View Detail</button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    {!pokemon.loading && !pokemon.error &&
                        <Pagination
                            total={pokemon.data.count}
                            limit={param.limit} 
                            current={(param.offset + 20) / 20}
                            changePage={(page) => {
                                handleChangeParam((page * 20) - 20)
                            }}
                        />
                    }

                    <div className="footer l-box is-center">
                        View the source of this layout to learn more. Made with love by the Pure Team.
                    </div>
                </div>
            </Element>

            <Modal show={modal.show} title={modal.data?.name || ''} hide={() => { setModal(initModal)}}>
                <Detail dataId={modal.data?.id} />
            </Modal>
        </>
    )
}

export default Home
