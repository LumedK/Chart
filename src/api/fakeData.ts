export function fakeFetch(url: string): Promise<Response> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(new Response())
        }, 200)
    })
}

class Response {
    fakeData = {
        data: {
            n: 'root',
            o: [
                {
                    n: 'device-1',
                    o: []
                },

                {
                    n: 'device-2',
                    o: [
                        {
                            n: '2020-04-27',
                            o: [
                                {
                                    n: 'adult',
                                    v: 1
                                },
                                {
                                    n: 'kid',
                                    v: 1
                                },
                                {
                                    n: 'old',
                                    v: 1
                                },
                                {
                                    n: 'undefined',
                                    v: 1
                                },
                                {
                                    n: 'young',
                                    v: 1
                                }
                            ]
                        }
                    ]
                },
                {
                    n: 'device-3',
                    o: [
                        {
                            n: '2020-05-08',
                            o: [
                                {
                                    n: 'adult',
                                    v: 1
                                },
                                {
                                    n: 'kid',
                                    v: 0
                                },
                                {
                                    n: 'old',
                                    v: 0
                                },
                                {
                                    n: 'undefined',
                                    v: 0
                                },
                                {
                                    n: 'young',
                                    v: 30
                                }
                            ]
                        }
                    ]
                },
                {
                    n: 'device-4',
                    o: [
                        {
                            n: '2020-05-13',
                            o: [
                                {
                                    n: 'adult',
                                    v: 3
                                },
                                {
                                    n: 'kid',
                                    v: 2
                                },
                                {
                                    n: 'old',
                                    v: 5
                                },
                                {
                                    n: 'undefined',
                                    v: 6
                                },
                                {
                                    n: 'young',
                                    v: 2
                                }
                            ]
                        }
                    ]
                },
                {
                    n: 'device-5',
                    o: [
                        {
                            n: '2020-05-28',
                            o: [
                                {
                                    n: 'adult',
                                    v: 0
                                },
                                {
                                    n: 'kid',
                                    v: 0
                                },
                                {
                                    n: 'old',
                                    v: 0
                                },
                                {
                                    n: 'undefined',
                                    v: 0
                                },
                                {
                                    n: 'young',
                                    v: 1
                                }
                            ]
                        }
                    ]
                },
                {
                    n: 'device-6',
                    o: [
                        {
                            n: '2020-08-06',
                            o: [
                                {
                                    n: 'adult',
                                    v: 0
                                },
                                {
                                    n: 'kid',
                                    v: 1
                                },
                                {
                                    n: 'old',
                                    v: 4
                                },
                                {
                                    n: 'undefined',
                                    v: 0
                                },
                                {
                                    n: 'young',
                                    v: 3
                                }
                            ]
                        }
                    ]
                },
                {
                    n: 'device-7',
                    o: [
                        {
                            n: '2020-08-4',
                            o: [
                                {
                                    n: 'adult',
                                    v: 0
                                },
                                {
                                    n: 'kid',
                                    v: 0
                                },
                                {
                                    n: 'old',
                                    v: 0
                                },
                                {
                                    n: 'undefined',
                                    v: 0
                                },
                                {
                                    n: 'young',
                                    v: 0
                                },
                                {
                                    n: 'senior',
                                    v: 3
                                }
                            ]
                        }
                    ]
                },
                {
                    n: 'device-8',
                    o: [
                        {
                            n: '2020-08-05',
                            o: [
                                {
                                    n: 'adult',
                                    v: 0
                                },
                                {
                                    n: 'kid',
                                    v: 0
                                },
                                {
                                    n: 'old',
                                    v: 0
                                },
                                {
                                    n: 'undefined',
                                    v: 0
                                },
                                {
                                    n: 'young',
                                    v: 1
                                }
                            ]
                        },
                        {
                            n: '2020-08-18',
                            o: [
                                {
                                    n: 'adult',
                                    v: 0
                                },
                                {
                                    n: 'kid',
                                    v: 0
                                },
                                {
                                    n: 'old',
                                    v: 0
                                },
                                {
                                    n: 'undefined',
                                    v: 0
                                },
                                {
                                    n: 'young',
                                    v: 0
                                }
                            ]
                        },
                        {
                            n: '2020-08-19',
                            o: [
                                {
                                    n: 'adult',
                                    v: 0
                                },
                                {
                                    n: 'kid',
                                    v: 0
                                },
                                {
                                    n: 'old',
                                    v: 0
                                },
                                {
                                    n: 'undefined',
                                    v: 0
                                },
                                {
                                    n: 'young',
                                    v: 1
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }

    async json() {
        return await JSON.parse(JSON.stringify(this.fakeData))
    }
}
