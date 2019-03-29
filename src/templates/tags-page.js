import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Button, Badge } from 'react-bootstrap'
import { slugify } from '../utils/utilityFunctions'
import { Link } from 'gatsby'
import { Container } from 'react-bootstrap'

const tagsPage = ({ pageContext }) => {
  const { tags, tagPostCounts } = pageContext
  return (
    <Layout>
      <SEO title="All tags" keywords={['tags', 'topics']} />
        <Container>
          <ul>
            {
              tags.map(tag => (
                <li key={tag} style={{ marginBottom: '10px' }}>
                  <Link to={`/tag/${slugify(tag)}`}>
                    <Button>
                      {tag} <Badge>{tagPostCounts[tag]}</Badge>
                    </Button>
                  </Link>
                </li>
              ))
            }
          </ul>
        </Container>
    </Layout>
  )
}

export default tagsPage
