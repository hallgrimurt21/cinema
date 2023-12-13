export const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000


export const OPEN_MODAL = "OPEN_MODAL"
export const CLOSE_MODAL = "CLOSE_MODAL"

export const openModal = () => ({
    type: OPEN_MODAL,
})

export const closeModal = () => ({
    type: CLOSE_MODAL,
})
