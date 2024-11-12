import type { StructureBuilder } from 'sanity/structure'
import { FaNewspaper, FaFolder, FaComments } from 'react-icons/fa'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Blog')
    .items([
      // Articles
      S.listItem()
        .title('Articles')
        .icon(FaNewspaper)
        .child(
          S.documentTypeList('post')
            .title('Articles')
        ),

      // Catégories
      S.listItem()
        .title('Catégories')
        .icon(FaFolder)
        .child(
          S.documentTypeList('category')
            .title('Catégories')
        ),

      // Tous les commentaires
      S.listItem()
        .title('Commentaires')
        .icon(FaComments)
        .child(
          S.documentTypeList('comment')
            .title('Commentaires')
            .filter('_type == "comment"')
        ),

      S.divider(),

      // Commentaires en attente
      S.listItem()
        .title('Commentaires en attente')
        .icon(FaComments)
        .child(
          S.documentTypeList('comment')
            .title('Commentaires en attente')
            .filter('_type == "comment" && !isApproved')
        ),

      // Commentaires approuvés
      S.listItem()
        .title('Commentaires approuvés')
        .icon(FaComments)
        .child(
          S.documentTypeList('comment')
            .title('Commentaires approuvés')
            .filter('_type == "comment" && isApproved == true')
        )
    ])