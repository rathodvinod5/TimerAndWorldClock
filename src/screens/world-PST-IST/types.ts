export type LocationDataType = {
  id: string
  createdTime: string
  fields: {
    asciiname: string
    timezone: string
    geonameid: bigint | number
  }
}

export type NetworkDataType = {
  records: LocationDataType[]
}

export type ZoneType = 'PST' | 'IST';