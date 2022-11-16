import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { pokemonActions } from "../store";
import Skeleton from "react-loading-skeleton";
import _ from "lodash";

const Detail = ({ dataId }) => {
    const dispatch = useDispatch()
    const pokemon = useSelector(x => x.pokemon.detail)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!_.isNull(dataId)) dispatch(pokemonActions.getDetail({ id: dataId }))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dataId])

    console.log(pokemon.data?.forms)

    return (
        <div className="monster">
            
            <div className="pure-g">
                <div className="pure-u-1 pure-u-md-2-5 pure-u-lg-2-5 left">
                    stats
                </div>
                <div className="pure-u-1 pure-u-md-3-5 pure-u-lg-3-5 right">
                    <ul>
                        {!pokemon.loading && !pokemon.error &&
                            pokemon.data?.stats.map((row, i) => (
                                <li key={i}>{row.stat.name} : {row.base_stat}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className="pure-g">
                <div className="pure-u-1 pure-u-md-2-5 pure-u-lg-2-5 left">
                    types
                </div>
                <div className="pure-u-1 pure-u-md-3-5 pure-u-lg-3-5 right">
                    <ul>
                        {!pokemon.loading && !pokemon.error &&
                            pokemon.data?.types.map((row, i) => (
                                <li key={i}>slot {row.slot} : {row.type.name}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className="pure-g">
                <div className="pure-u-1 pure-u-md-2-5 pure-u-lg-2-5 left">
                    height
                </div>
                <div className="pure-u-1 pure-u-md-3-5 pure-u-lg-3-5 right inline">
                    {!pokemon.loading && !pokemon.error &&
                        pokemon.data?.height
                    }
                </div>
            </div>
            <div className="pure-g">
                <div className="pure-u-1 pure-u-md-2-5 pure-u-lg-2-5 left">
                    weight
                </div>
                <div className="pure-u-1 pure-u-md-3-5 pure-u-lg-3-5 right inline">
                    {!pokemon.loading && !pokemon.error &&
                        pokemon.data?.weight
                    }
                </div>
            </div>
            <div className="pure-g">
                <div className="pure-u-1 pure-u-md-2-5 pure-u-lg-2-5 left">
                    base experience
                </div>
                <div className="pure-u-1 pure-u-md-3-5 pure-u-lg-3-5 right">
                    {!pokemon.loading && !pokemon.error &&
                        pokemon.data?.base_experience
                    }
                </div>
            </div>
            <div className="pure-g">
                <div className="pure-u-1 pure-u-md-2-5 pure-u-lg-2-5 left">
                    abilities
                </div>
                <div className="pure-u-1 pure-u-md-3-5 pure-u-lg-3-5 right">
                    <ul>
                        {!pokemon.loading && !pokemon.error &&
                            pokemon.data?.abilities.map((row, i) => (
                                <li key={i}>slot {row.slot} : {row.ability.name} {(row.is_hidden === true) ? <span>hidden</span> : null}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className="pure-g">
                <div className="pure-u-1 pure-u-md-2-5 pure-u-lg-2-5 left">
                    forms
                </div>
                <div className="pure-u-1 pure-u-md-3-5 pure-u-lg-3-5 right">
                    <ul>
                        {!pokemon.loading && !pokemon.error &&
                            pokemon.data?.forms.map((row, i) => (
                                <li key={i}>{row.name}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className="pure-g">
                <div className="pure-u-1 pure-u-md-2-5 pure-u-lg-2-5 left">
                    game version
                </div>
                <div className="pure-u-1 pure-u-md-3-5 pure-u-lg-3-5 right inline">
                    {!pokemon.loading && !pokemon.error &&
                        pokemon.data?.game_indices.map((row, i) => (
                            <>{(pokemon.data.game_indices.length !== i + 1) ? <span key={i}>{row.version.name}, </span> : <span key={i}>{row.version.name}</span>}</>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Detail