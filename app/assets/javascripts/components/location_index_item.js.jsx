(function(root) {
  root.LocationIndexItem = React.createClass({
    render: function() {
      return (
        <li>
          <a onClick={this.props.callback} href={ "#/location/" + this.props.location.location.id }>
            { this.props.location.location.place }
          </a>
        </li>
      );
    }
  });
})(this);
