import React, { useEffect, useRef, useState, useCallback } from 'react';

interface UseDynamicSVGImportOptions {
  onCompleted?: (
    name: string,
    SvgIcon: React.FC<React.SVGProps<SVGSVGElement>> | undefined
  ) => void;
  onError?: (err: Error) => void | any;
}

function useDynamicSVGImport(
  name: string,
  options: UseDynamicSVGImportOptions = {}
): any {
  const ImportedIconRef = useRef<React.FC<React.SVGProps<SVGSVGElement>>>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  const { onCompleted, onError } = options;
  useEffect(() => {
    setLoading(true);
    const importIcon = async (): Promise<void> => {
      try {
        ImportedIconRef.current = (
          await import(`../../assets/svg/${name}.svg`)
        ).ReactComponent;
        onCompleted?.(name, ImportedIconRef.current);
      } catch (err: any) {
        onError?.(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name, onCompleted, onError]);

  return { error, loading, SvgIcon: ImportedIconRef.current };
}

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name?: string | any;
  onCompleted?: UseDynamicSVGImportOptions['onCompleted'];
  onError?: UseDynamicSVGImportOptions['onError'] | any;
}

const IconTest: React.FC<IconProps> = ({
  name,
  onCompleted,
  onError,
  ...rest
}) => {
  const { error, loading, SvgIcon } = useDynamicSVGImport(name, {
    onCompleted,
    onError,
  });
  if (error) {
    return error.message;
  }
  if (loading) {
    return 'Loading...';
  }
  if (SvgIcon) {
    return <SvgIcon {...rest} />;
  }
  return 'Nope.';
};

IconTest.defaultProps = {
  name: 'circle',
};

export default IconTest;
