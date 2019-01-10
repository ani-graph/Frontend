export const GetUser = `
{
  Viewer {
    id
    name
    avatar {
      large
    }
    unreadNotificationCount
    donatorTier
    updatedAt
    options {
      titleLanguage
      displayAdultContent
    }
    mediaListOptions {
      scoreFormat
    }
  }
}
`