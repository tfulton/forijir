import React from 'react'
import {
    Button,
    Container,
    Grid,
    Header,
    Icon,
    Image,
    Item,
    Label,
    Menu,
    Segment,
    Step,
    Table,
} from 'semantic-ui-react'

const style = {
    h1: {
        marginTop: '3em',
    },
    h2: {
        margin: '4em 0em 2em',
    },
    h3: {
        marginTop: '2em',
        padding: '2em 0em',
    },
    last: {
        marginBottom: '300px',
    },
}

const App = () => (
    <div>
        <Header
            as="h3"
            content="Forijir"
            style={style.h3}
            textAlign="center"
        />
        <Grid container columns={2} doubling stackable>
            <Grid.Column>
                <Segment>
                    <Image
                        fluid
                        src="/images/generic.png"
                        as="a"
                        size="large"
                        href="http://google.com"
                        target="_blank"
                    />
                </Segment>
            </Grid.Column>
            <Grid.Column>
                <Segment>Content</Segment>
                <Segment>Content</Segment>
                <Segment>Content</Segment>
                <Segment>Content</Segment>
                <Segment>Content</Segment>
            </Grid.Column>
        </Grid>
        <Grid container columns={3} stackable>
            <Grid.Row>
                <Grid.Column>
                    <Segment>
                        <Image
                            fluid
                            src="/images/generic.png"
                            as="a"
                            size="large"
                            href="http://google.com"
                            target="_blank"
                        />
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment>1</Segment>
                    <Segment>2</Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment>1</Segment>
                    <Segment>2</Segment>
                    <Segment>3</Segment>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </div>
)

export default App