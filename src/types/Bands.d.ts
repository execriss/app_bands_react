/**
 * Types for bands API objects
 */
export namespace Bands {

    /** Object for band integrant data */
    type MemberType = {
        name: string
    }
    /** Object for band data from API fetchs results */
    type BandType = {
        [string: string]: any
        id: number,
        name: string,
        genreCode: string,
        year: number,
        country: string,
        members: MemberType[]
    }
    /** Object width data to rel with bands genres from API results */
    type GenreType = {
        code: string,
        name: string
    }
    /** Bands albums from API results */
    type AlbumType = {
        id: number,
        bandId: number,
        name: string,
        year: number
    }

    /** Object provided by BandsContext context */
    interface BandsContext {
        bands: BandType[],
        fetchBands: () => void,
        sortBands: (sortBy:string, order:string) => void
    }

    /** Arguments of reducer function in BandsProvider component */
    type BandsReducer = (
        state:BandType[], 
        action:{
            type:string, 
            value:BandType[]
        }) => void 

}