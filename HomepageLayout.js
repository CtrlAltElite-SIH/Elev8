import PropTypes from 'prop-types'
import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import './HomepageLayout.css'
import {
  Button,
  Card,
  Container,
  Header,
  Icon,
  Image,
  Menu,
  Responsive,
  Segment,
  Visibility,
} from 'semantic-ui-react'

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='Elev8'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='Do whatever you want when you want to.'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Button primary size='huge'>
      Get Started
      <Icon name='right arrow' />
    </Button>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as='a' active>
                  Home
                </Menu.Item>
                <Menu.Item as='a'>Profile</Menu.Item>
                <Menu.Item as='a'>Mentor</Menu.Item>
                <Menu.Item as='a'>Internships</Menu.Item>
                <Menu.Item as='a'>Blogs</Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted={!fixed}>
                    Log in
                  </Button>
                  <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}
const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  <ResponsiveContainer>
    <div style={{marginTop: '6%'}}>
    <Header as='h2' textAlign='center' style={{color: 'black'}}>Internships</Header> 
    </div>
    <Segment style={{ padding: '8em 0em' }} vertical>
    <Card.Group centered>
    <Card>
    <Card.Content>
      <Card.Header>Daniel</Card.Header>
      <Image src='/Dan.jpg' size='medium' rounded />
      <Card.Description>
        Daniel is a comedian living in Nashville.
      </Card.Description>
    </Card.Content>
    </Card>
    <Card>
    <Card.Content>
      <Card.Header>Natasha</Card.Header>
      <Image src='/Dan.jpg' size='medium' rounded />
      <Card.Description>
        Natasha is a writer living in Nebraska.
      </Card.Description>
    </Card.Content>
  </Card>
  <Card>
    <Card.Content>
      <Card.Header>John</Card.Header>
      <Image src='/Dan.jpg' size='medium' rounded />
      <Card.Description>
        John is a consultant living in Nebraska.
      </Card.Description>
    </Card.Content>
  </Card>
  </Card.Group>
  <Button primary size='huge' style={{ marginLeft: '25em' ,marginTop:'3em'}}>
      Expand   
    </Button>
  </Segment>
  <div style={{marginTop: '6%'}}>
    <Header as='h2' textAlign='center' style={{color: 'black'}}>Experts</Header> 
    </div>
  <Segment style={{ padding: '8em 0em' }} vertical>
    <Card.Group centered>
    <Card>
    <Card.Content>
      <Card.Header>Daniel</Card.Header>
      <Image src='/Dan.jpg' size='medium' rounded />
      <Card.Description>
        Daniel is a comedian living in Nashville.
      </Card.Description>
    </Card.Content>
    </Card>
    <Card>
    <Card.Content>
      <Card.Header>Natasha</Card.Header>
      <Image src='/Dan.jpg' size='medium' rounded />
      <Card.Description>
        Natasha is a writer living in Nebraska.
      </Card.Description>
    </Card.Content>
  </Card>
  <Card>
    <Card.Content>
      <Card.Header>John</Card.Header>
      <Image src='/Dan.jpg' size='medium' rounded />
      <Card.Description>
        John is a consultant living in Nebraska.
      </Card.Description>
    </Card.Content>
  </Card>
    </Card.Group>
    </Segment>
  </ResponsiveContainer>
)

export default HomepageLayout 