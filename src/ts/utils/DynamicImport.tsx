// // Copyright 2018 Matt<mr.chenyuqing@live.com>

interface IDynamicImportProps {
  load: () => Promise<any>;
  children: (component: any) => any;
}

interface IDynamicImportState {
  component: React.ComponentClass | null;
}

class DynamicImport extends React.Component<IDynamicImportProps, IDynamicImportState> {

  constructor (props: any) {
    super(props);
    this.state = {
      component: null
    };
  }

  public componentDidMount () {
    const { load } = this.props;
    load().
    then((component) => {
      this.setState(() => ({
        component: component.default ? component.default : component
      })
    );});
  }

  public render () {
    return this.props.children(this.state.component);
  }
}

export const dynamicComponentFromPath = (asyncComponent: Promise<any>) => (props:any) => (
  <DynamicImport load={() => asyncComponent}>
    {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...props} />}
  </DynamicImport>
);

export default DynamicImport;
