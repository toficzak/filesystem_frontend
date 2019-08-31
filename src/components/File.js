import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const File = (props) => {
    return(
        <div>
            {props.file ? (
                <Card>
                    <CardMedia style={{height: 0, paddingTop: '56.25%'}}
                        image={props.file.name}
                        title={props.file.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant='headline' component="h2">
                            {props.file.name}
                        </Typography>
                        <Typography component="p">
                            {props.file.name}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" href={props.file.name} target="_blank">
                            Open
                        </Button>
                    </CardActions>
                </Card>
            ) : null }
        </div>
    )
}

export default File