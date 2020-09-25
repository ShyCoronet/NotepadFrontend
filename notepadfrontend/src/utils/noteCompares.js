import {SORT_ALPHABETICALLY, SORT_BY_CREATION_TIME} from "../components/SortSettingsMenu/sortTypes";

export function sortNotesByName(x, y) {
    const lowerCaseNameX = x.name.toLowerCase()
    const lowerCaseNameY = y.name.toLowerCase()

    if (lowerCaseNameX > lowerCaseNameY) {
        return 1
    }
    if (lowerCaseNameX < lowerCaseNameY) {
        return -1
    }

    return 0
}

export function sortNotesByCreationTime(x, y) {
    if (x.creationDateTimeInSeconds > y.creationDateTimeInSeconds) {
        return -1
    }
    if (x.creationDateTimeInSeconds < y.creationDateTimeInSeconds) {
        return 1
    }

    return 0

}

export function getComparer(sortType) {
    switch (sortType) {
        case SORT_ALPHABETICALLY:
            return sortNotesByName
        case SORT_BY_CREATION_TIME:
            return sortNotesByCreationTime
        default:
            return sortNotesByCreationTime
    }
}